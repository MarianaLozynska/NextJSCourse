import Link from "next/link";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
export default function Reserve() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            <Header />
            {/* FORM */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Last name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Occasion (optional)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Requests (optional)"
              />
              <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
                Complete reservation
              </button>
              <p className="mt-4 text-sm">
                By clicking “Complete reservation” you agree to the OpenTable
                Terms of Use and Privacy Policy. Standard text message rates may
                apply. You may opt out of receiving text messages at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
