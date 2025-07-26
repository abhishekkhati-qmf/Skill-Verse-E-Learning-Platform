//2PwN3SmxVZbpfgeh
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "@/features/api/authApi";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signupinput, setSignupinput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [logininput, setLogininput] = useState({ email: "", password: "" });

  const [
    regiserUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupinput({ ...signupinput, [name]: value });
    } else {
      setLogininput({ ...logininput, [name]: value });
    }
  };

  const handleRegistration = async (type) => {
    const inputData = type === "signup" ? signupinput : logininput;
    const action = type === "signup" ? regiserUser : loginUser;
    await action(inputData);
  };



  useEffect(() => {
    if(registerIsSuccess && registerData){
      toast.success(registerData.message || "Signup successful.")
    }
    if(registerError){
      toast.error(registerError.data.message || "Signup Failed");
    }
    if(loginIsSuccess && loginData){
      toast.success(loginData.message || "Login successful.");
      navigate("/");
    }
    if(loginError){ 
      toast.error(loginError.data.message || "login Failed");
    }
  }, [
    loginIsLoading,
    registerIsLoading,
    loginData,
    registerData,
    loginError,
    registerError,
  ]);
  return (
    <div className="flex h-full items-center w-full justify-center mt-20">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <form  onSubmit={(e) => {
    e.preventDefault();          // keep the page from reloading
    handleRegistration("signup");
  }}>
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupinput.name}
                  id="name"
                  placeholder="Eg. abhishek"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  // required={true} No use if no wrap in form tag
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  value={signupinput.email}
                  id="email"
                  placeholder="Eg. abhishek@gmail.com"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  // required={true} No use if no wrap in form tag
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={signupinput.password}
                  id="password"
                  placeholder="Eg. xyz"
                  onChange={(e) => changeInputHandler(e, "signup")}
                  // required={true} No use if no wrap in form tag
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerIsLoading}
                onClick={() => handleRegistration("signup")}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
        </TabsContent>
        <TabsContent value="login">
          <form  onSubmit={(e) => {
    e.preventDefault();          
    handleRegistration("login");
  }}>
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  value={logininput.email}
                  id="email"
                  placeholder="Eg. abhishek@gmail.com"
                  onChange={(e) => changeInputHandler(e, "login")}
                  // required={true} No use if no wrap in form tag
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={logininput.password}
                  id="password"
                  placeholder="Eg. xyz"
                  onChange={(e) => changeInputHandler(e, "login")}
                  // required={true} No use if no wrap in form tag
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => handleRegistration("login")}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Login;
