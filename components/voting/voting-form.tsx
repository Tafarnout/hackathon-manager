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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  innovation: z.number().min(1).max(10),
  technicalComplexity: z.number().min(1).max(10),
  impact: z.number().min(1).max(10),
  presentation: z.number().min(1).max(10),
  overall: z.number().min(1).max(10),
  feedback: z.string().optional(),
});

interface VotingFormProps {
  projectId: string;
  onVoteSubmit: (data: z.infer<typeof formSchema>) => void;
}

export function VotingForm({ projectId, onVoteSubmit }: VotingFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      innovation: 5,
      technicalComplexity: 5,
      impact: 5,
      presentation: 5,
      overall: 5,
      feedback: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onVoteSubmit(values);
    toast({
      title: "Vote Submitted",
      description: "Your evaluation has been recorded successfully.",
    });
  };

  const criteria = [
    {
      name: "innovation",
      label: "Innovation",
      description: "Originality and creativity of the solution",
    },
    {
      name: "technicalComplexity",
      label: "Technical Complexity",
      description: "Sophistication and technical implementation",
    },
    {
      name: "impact",
      label: "Impact",
      description: "Potential impact and real-world applicability",
    },
    {
      name: "presentation",
      label: "Presentation",
      description: "Quality of documentation and demonstration",
    },
    {
      name: "overall",
      label: "Overall",
      description: "Overall impression of the project",
    },
  ] as const;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Evaluation</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {criteria.map((criterion) => (
              <FormField
                key={criterion.name}
                control={form.control}
                name={criterion.name}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel>{criterion.label}</FormLabel>
                      <span className="text-sm text-muted-foreground">
                        {field.value}/10
                      </span>
                    </div>
                    <FormControl>
                      <Slider
                        min={1}
                        max={10}
                        step={1}
                        defaultValue={[field.value]}
                        onValueChange={(values) => field.onChange(values[0])}
                      />
                    </FormControl>
                    <FormDescription>{criterion.description}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide additional feedback..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Share constructive feedback with the team
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit Evaluation
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}