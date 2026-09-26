import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { Spinner } from "@/components/icons/icons";

type FormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FormInputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormInputs) {
    startTransition(() => {
      console.log(data)
      toast.success("Email sent!");
      form.reset();
    });
  }

  return (
    <div className="relative z-10 mx-auto -mt-20 max-w-4xl rounded-md bg-white px-[7%] py-10 shadow-lg dark:bg-slate-900 dark:shadow-slate-950/40 md:py-[5%]">
      <div className="container">
        <ul className="mb-6 space-y-1 text-center text-sm">
          <li>
            <span>Community: </span>
              <a href="https://wa.me/237671313884" target="_blank" rel="noreferrer" className="hover:text-primary">
                WhatsApp +237 671 313 884
              </a>
          </li>
          <li>
            <span>Email: </span>
            <a href="mailto:hello@techcore.dev" className="hover:text-primary">
              hello@techcore.dev
            </a>
          </li>
        </ul>
        <Form {...form}>
          <form
            className="flex flex-col dark:text-black"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-8">
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-6">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Subject</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Project collaboration, mentorship, or discussion" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-6">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project, question, or idea..."
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? (
                <>
                  <Spinner className="mr-2 h-5 w-5 animate-spin" />
                  <span>Sending</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
