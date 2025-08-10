import ProtectedRoute from "../../components/protectedRoute";
import NavBar from "@/components/navBar";
import Card from "@/components/card";
import Link from "next/link";
import CardDescription from "@/components/cardDescription";
import CardWithDescription from "@/components/cardWhithDescription";
import CheckoutButton from "@/components/CheckoutButton";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <header>
          <NavBar>
            <div className="flex-1">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  <img src="/menu.svg" alt="Menu" className="h-5 w-5" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Productos
                    </a>
                  </li>
                  <li>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                      Item
                    </a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">Yankuilotl</a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />{" "}
                    </svg>
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">0 Items</span>
                    <span className="text-info">Subtotal: $0</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        Carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Perfil
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Ajustes</a>
                  </li>
                  <li>
                    <a>Cerrar Sesion</a>
                  </li>
                </ul>
              </div>
            </div>
          </NavBar>
        </header>

        <main>
          <section className=""></section>
          <div
            className="hero min-h-screen relative "
            style={{
              backgroundImage: "url('/images/angelopolis.png')",
            }}
          >
            <img
              alt=""
              src="/images/iconos-sin-fondo.png"
              className="size-180 relative bottom-1/12 right-1/4 transform -translate-x-1/15 -translate-y-1/25"
            />

            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold sm:whitespace-nowrap">
                  PERFECT SOLUTION
                </h1>
                <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold sm:whitespace-nowrap">
                  FOR YOUR BUISNESS
                </h2>
                <Link href={"/login"}>
                  <button className="btn btn-primary bg-amber-50 text-black text-2xl rounded-full my-7 h-20 w-60">
                    Comienza ahora
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <section className="my-7 mx-5">
            <div className="bg-gradient-to-l from-green-500 to to-green-400 rounded-4xl p-4">
              <div className="mb-4">
                <p className="text-black text-2xl my-10 mx-5">Secciones</p>
                <h2 className="font-extrabold text-7xl text-white">
                  Conoce nuestras Secciones
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-100">
                <CardWithDescription
                  imageUrl="/images/team.jpg"
                  imageAlt="Mi producto"
                  text="Quienes somos"
                  className="font-extrabold text-center text-3xl h-full"
                />
                <CardWithDescription
                  imageUrl="/images/lineasDeNegocio.jpg"
                  imageAlt="Mi producto"
                  text="Lineas de negocio"
                  className="font-extrabold text-center text-3xl h-full"
                />
                <CardWithDescription
                  imageUrl="/images/transparenciaYRendicionDeCuentas.jpeg"
                  imageAlt="Mi producto"
                  text="Transparencia y rendicion de cuentas"
                  className="font-extrabold text-center text-3xl h-full"
                />
                <CardWithDescription
                  imageUrl="/images/noticiasyPrensa.jpg"
                  imageAlt="Mi producto"
                  text="Noticias y prensa"
                  className="font-extrabold text-center text-3xl h-full"
                />
              </div>
            </div>
          </section>
          {/* <div className="z-20">
            <CheckoutButton />
          </div> */}
          <section className="border-5 border-green-500 rounded-4xl m-10 flex flex-wrap">
            <div className="w-[80vh]">
              <h1 className="font-extrabold text-6xl ml-15 my-10 mb-4">
                Yankuilotl
              </h1>
              <p className="my-4  ml-15 ms-10 text-xl font-extralight text-gray-600">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                beatae molestias obcaecati adipisci, quam velit, molestiae minus
                similique natus neque placeat sequi vero est sit eos, modi
                voluptatem nisi quo.
              </p>

              <p className="text-2xl font-extrabold ml-15 flex flex-wrap items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                  className="m-2"
                >
                  <path
                    className="fill-none stroke-red-800 stroke-[4px]"
                    d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
                  ></path>
                </svg>
                Marco juridico (decreto de creacion, leyes aplicables)
              </p>
              <p className="text-2xl font-extrabold ml-15 flex flex-wrap items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                  className="m-2"
                >
                  <path
                    className="fill-none stroke-red-800 stroke-[4px]"
                    d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
                  ></path>
                </svg>
                Gobierno corporativo
              </p>
              <ul className="ml-26 mb-8 text-gray-500/80">
                <li>Consejo de Administracion</li>
                <li>Comites</li>
                <li>Organos de vigilancia</li>
              </ul>
              <p className="text-2xl font-extrabold ml-15 flex flex-wrap items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                  className="m-2"
                >
                  <path
                    className="fill-none stroke-red-800 stroke-[4px]"
                    d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
                  ></path>
                </svg>
                Estructura organizacional
              </p>
              <button className="btn btn-primary ml-20 mt-15 w-95 h-17 rounded-full text-2xl bg-red-900">
                Ver historial de clientes
              </button>
            </div>
            <div className="relative">
              <div className="bg-red-900 rounded-l-3xl absolute bottom-1/6 left-1/4 transform -translate-x-1/2 -translate-y-1/2  p-8 z-20 flex flex:wrap">
                <p className="text-white font-extrabold text-7xl">10</p>
                <div className=" relative w-[30] ml-5">
                  <p className="text-white font-extrabold text-4xl">Años de</p>
                  <p className="text-white font-extrabold text-4xl">
                    experiencia
                  </p>
                </div>
              </div>
              <img
                src={"/images/circuito.png"}
                className="rounded-4xl ml-40 my-10"
              />
            </div>
          </section>
        </main>
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-20">
          <nav>
            <h6 className="footer-title">Links</h6>
            <a className="link link-hover">Inicio</a>
            <a className="link link-hover">Quienes somos</a>
            <a className="link link-hover">Lineas de negocio</a>
            <a className="link link-hover">
              transparencia y rendicion de cuentas
            </a>
            <a>Noticias y prensa</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contactos</h6>
            <a className="link link-hover">telefono: +22222222</a>
            <a className="link link-hover">Email: ejemplo@gmail.com</a>
            <a className="link link-hover">
              Direccion: Puebla de Zaragoza, Puebla, Mexico
            </a>
          </nav>
          <nav>
            <h6 className="footer-title">Ponte en contacto</h6>
            <a className="link link-hover">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
          </nav>
        </footer>
      </div>
    </ProtectedRoute>
  );
}
