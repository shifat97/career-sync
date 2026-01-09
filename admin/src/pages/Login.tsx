import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, Chrome, Mountain } from 'lucide-react';
import cuteBunny from '@/assets/images/cuteBunnyGif.gif';

export default function Login() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Welcome Back!
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-[400px] text-center">
            Access your account safely and continue managing your work with
            confidence and ease.
          </p>
          <div className="mt-8 h-96 w-96 mx-auto">
            <img
              src={cuteBunny}
              alt="Cute Bunny"
              className="h-full w-full rounded-lg object-cover shadow-lg animate-float block"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Mountain className="inline-block h-12 w-12 text-gray-900 dark:text-white" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
              Login to Your Account
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Enter your credentials to continue
            </p>
          </div>
          <form className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="pl-10 h-12"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="pl-10 h-12"
              />
            </div>
            <div className="text-right">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full h-12 text-lg">
              Sign in
            </Button>
          </form>
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="mx-4 text-gray-500 dark:text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>
          <Button variant="outline" className="w-full h-12 text-lg">
            <Chrome className="mr-2 h-6 w-6" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
