"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Form = () => {
  const { data: session } = useSession();

  const params = useSearchParams();
  let callbackUrl = params.get("callbackUrl") || "/";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (session && session.user) {
      router.push(callbackUrl);
    }
  }, [callbackUrl, params, router, session]);
  const formSubmit: SubmitHandler<Inputs> = async (form) => {
    const { email, password } = form;
    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className="max-w-sm mx-auto card bg-base-300 my-4">
      <div className="card-body">
        <h1 className="card-title">Se Connecter</h1>
        {params.get("error") && (
          <div className="alert text-error">
            {params.get("error") === "CredentialsSignin"
              ? "Email ou password invalide"
              : params.get("error")}
          </div>
        )}
        {params.get("success") && (
          <div className="alert text-success">{params.get("success")}</div>
        )}
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="my-2">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-"
              id="email"
              {...register("email", {
                required: "Email obligatoire",
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Email invalide",
                },
              })}
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-2">
            <label htmlFor="password" className="label">
              Mot de Passe
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Mot de passe obligatoire",
              })}
              className="input input-bordered w-full max-w-sm"
            />
            {errors.password?.message && (
              <div className="text-error">{errors.password.message}</div>
            )}
          </div>
          <div className="my-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full"
            >
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Se Connecter
            </button>
          </div>
        </form>
        <div>
          Pas de compte?
          <Link className="link" href={`/register?callbackUrl=${callbackUrl}`}>
            Inscrivez-vous maintenant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
