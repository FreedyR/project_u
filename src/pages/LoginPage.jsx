import { Key } from "lucide-react";
const LoginPage = () => {
  return (
    <>
      <section className="flex pt-15 p-4 place-content-center">
        <form className="relative grid grid-cols-2 max-sm:grid-cols-1 w-full rounded">
          <div className="flex flex-col gap-5 h-full bg-[#fefefe] p-4 rounded text-center">
            <h2 className="mt-auto text-lg">Logowanie</h2>
            <div className="flex flex-col gap-5  mb-auto">
              <input
                type="text"
                name="login"
                id="login"
                placeholder="Identyfikator"
                className="bg-gray-200 border-2  p-4 w-full rounded"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Hasło"
                className="bg-gray-200 border-2  p-4 w-full rounded"
              />
              <button className="ml-auto mr-auto bg-blue-800 p-4 rounded w-full text-white">
                Zaloguj
              </button>
              <p>Lub użyj alternatywnej opcji</p>
              <button className="p-2 text-white bg-blue-800 w-min rounded ml-auto mr-auto">
                <Key />
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-blue-800 text-white text-center p-4 rounded place-items-center">
            <div className="flex gap-2 flex-col mt-auto mb-auto ">
              <h2 className="w-full text-lg">Witaj ponownie Adam!</h2>
              <p>
                Witaj w oficjalnym systemie obsługi studenta. Zaloguj się, aby
                uzyskać dostęp do swoich ocen, planu zajęć oraz aktualnych
                ogłoszeń. Życzymy owocnej nauki i samych sukcesów w tym
                semestrze!
              </p>
              <button className="ml-auto mr-auto bg-blue-700 p-4 rounded-full w-full text-white mt-4">
                Nie masz konta? Zarejestruj się.
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
export default LoginPage;
