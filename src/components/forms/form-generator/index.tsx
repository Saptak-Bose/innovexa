import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  type?: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea";
  options?: {
    value: string;
    label: string;
    id: string;
  }[];
  label?: string;
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
};

export default function FormGenerator({
  errors,
  inputType,
  label,
  lines,
  name,
  options,
  placeholder,
  register,
  type,
}: Props) {
  const commonInputClasses =
    "bg-input border border-border text-foreground placeholder-muted-foreground rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:border-primary";
  const errorClass = "text-destructive mt-1 text-sm";

  switch (inputType) {
    case "input":
      return (
        <Label
          htmlFor={name}
          className="flex flex-col gap-1 text-secondary-foreground"
        >
          {label && <span className="font-medium">{label}</span>}
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            className={commonInputClasses}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) =>
              message && message !== "Required" ? (
                <p className={errorClass}>{message}</p>
              ) : null
            }
          />
        </Label>
      );

    case "select":
      return (
        <Label
          htmlFor={name}
          className="flex flex-col gap-1 text-secondary-foreground"
        >
          {label && <span className="font-medium">{label}</span>}
          <select
            id={name}
            className={`${commonInputClasses} appearance-none`}
            {...register(name)}
          >
            {options?.length &&
              options.map((opt) => (
                <option key={opt.id} value={opt.value}>
                  {opt.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) =>
              message && message !== "Required" ? (
                <p className={errorClass}>{message}</p>
              ) : null
            }
          />
        </Label>
      );

    case "textarea":
      return (
        <Label
          htmlFor={name}
          className="flex flex-col gap-1 text-secondary-foreground"
        >
          {label && <span className="font-medium">{label}</span>}
          <Textarea
            id={name}
            placeholder={placeholder}
            rows={lines}
            className={commonInputClasses + " resize-none"}
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) =>
              message && message !== "Required" ? (
                <p className={errorClass}>{message}</p>
              ) : null
            }
          />
        </Label>
      );
  }
}
