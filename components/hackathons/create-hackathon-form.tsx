"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { FileUpload } from "@/components/submissions/file-upload";
import { TechStackInput } from "@/components/submissions/tech-stack-input";
import { format } from "date-fns";
import { useAuth } from "@/lib/auth-store";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  startDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: "Start date must be in the future",
  }),
  endDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: "End date must be in the future",
  }),
  skillLevel: z.enum(["beginner", "intermediate", "advanced", "all"]),
  prizePool: z.string().min(1, "Prize pool is required"),
  categories: z.array(z.string()).min(1, "Add at least one category"),
  maxParticipants: z.string().min(1, "Maximum participants is required"),
  thumbnail: z.any().optional(),
  judgingCriteria: z.array(z.string()).min(1, "Add at least one judging criterion"),
});

export function CreateHackathonForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { user } = useAuth();
  console.log("USER HERE", user)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      skillLevel: "all",
      prizePool: "",
      categories: [],
      maxParticipants: "",
      judgingCriteria: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to create a hackathon",
          variant: "destructive",
        });
        router.push("/login");
        return;
      }

      // Make API call to create hackathon
      const response = await fetch(`/api/hackathons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.id}`,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create hackathon');
      }

      const hackathon = await response.json();
      
      toast({
        title: "Hackathon Created",
        description: "Your hackathon has been created successfully.",
      });
      
      router.push("/hackathons");
    } catch (error) {
      console.error('Error creating hackathon:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create hackathon. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6 pt-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hackathon Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter hackathon title" {...field} />
                  </FormControl>
                  <FormDescription>
                    Choose a clear and engaging title for your hackathon
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your hackathon..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide details about the hackathon's theme, goals, and expectations
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        min={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        min={format(new Date(), "yyyy-MM-dd'T'HH:mm")}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="skillLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skill Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select skill level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="all">All Levels</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxParticipants"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Participants</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        placeholder="Enter maximum participants"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="prizePool"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prize Pool</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., $5,000" {...field} />
                  </FormControl>
                  <FormDescription>
                    Specify the total prize value and distribution
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categories</FormLabel>
                  <FormControl>
                    <TechStackInput
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    Add relevant categories for your hackathon (e.g., AI, Web3, Mobile)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="judgingCriteria"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Judging Criteria</FormLabel>
                  <FormControl>
                    <TechStackInput
                      onChange={field.onChange}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormDescription>
                    Define the criteria for evaluating projects
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail Image</FormLabel>
                  <FormControl>
                    <FileUpload
                      onFileChange={(files) => field.onChange(files[0])}
                      maxFiles={1}
                      accept={{ "image/*": [".png", ".jpg", ".jpeg"] }}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a cover image for your hackathon
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit">Create Hackathon</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}