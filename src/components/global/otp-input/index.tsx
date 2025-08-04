import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import { Dispatch, SetStateAction } from "react";

type Props = {
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
};

export default function OtpInput({ otp, setOtp }: Props) {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
      <div id="clerk-captcha" className="flex gap-3">
        <div>
          <InputOTPSlot index={0} />
        </div>
        <div>
          <InputOTPSlot index={1} />
        </div>
        <div>
          <InputOTPSlot index={2} />
        </div>
        <div>
          <InputOTPSlot index={3} />
        </div>
        <div>
          <InputOTPSlot index={4} />
        </div>
        <div>
          <InputOTPSlot index={5} />
        </div>
      </div>
    </InputOTP>
  );
}
