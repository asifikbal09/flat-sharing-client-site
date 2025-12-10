"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { loginUser } from '@/utils/actions/loginUser';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
     const [showPassword, setShowPassword] = useState(false);
    //   const { toast } = useToast();
    
    const route = useRouter()
      const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
          email: "asif@mail.com",
          password: "123456",
        },
      });
    
      const onSubmit = async(data: LoginFormData) => {
        const toastId = toast.loading("Logging in...");
        console.log("Login data:", data);
        try {
            
            const userInfo = await loginUser(data);
            if(userInfo?.data?.token){
                localStorage.setItem("access-token", userInfo.data.token);
                route.push("/")
                toast.success("Logged in successfully!", {id: toastId})
            }

        } catch (err) {
            console.log(err)
            toast.error("Login failed. Please try again.", {id: toastId})
        }
      };
    return (
        <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            placeholder="you@example.com"
                            className="pl-10 h-12"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 h-12"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-muted-foreground">Remember me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:text-primary/80 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div> */}

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold shadow-soft"
                >
                  Sign In
                </Button>
              </form>
            </Form>

           
          </div>
    );
};

export default LoginForm;