import { Check, ShoppingCart } from "lucide-react";

const SignUpButton = ({ signed }) => {
  return (
    <>
      <button className="flex gap-2 items-center">
        {signed ? (
          <>
            <Check className="text-[green]" />
            Zapisano się
          </>
        ) : (
          <>
            <ShoppingCart />
            Zapisz się
          </>
        )}
      </button>
    </>
  );
};
export default SignUpButton;
