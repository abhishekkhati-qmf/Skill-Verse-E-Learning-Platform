import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useCreateCheckoutSessionMutation } from "@/features/api/purchaseApi";
import { Loader2 } from "lucide-react";

const BuyCourseButton = ({ courseId }) => {
  const [createCheckoutSession, { data,isLoading,}] =
    useCreateCheckoutSessionMutation();

  const purchaseCourseHandler = async () => {
    await createCheckoutSession(courseId);
  };

  const sessionId = data?.sessionId;
  
 useEffect(() => {
  if (sessionId) {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js";
    script.onload = () => {
      const cashfree = new window.Cashfree(sessionId);
      cashfree.redirect();  // Redirect user to Cashfree payment page
    };
    document.body.appendChild(script);
  }
}, [sessionId]);

  return (
    <>
    <Button
      disabled={isLoading}
      onClick={purchaseCourseHandler}
      className="w-full"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Purchase Course"
      )}
    </Button>
    <script src="https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js"></script>
    </>
  );
};

export default BuyCourseButton;
