import NavBar from "@/components/navBar";
import Link from "next/link";
import CardWithDescription from "@/components/cardWhithDescription";
import useAuth from "@/hooks/useAuth";

import NoticiasPrensaCarousel, { Noticia } from "@/components/carrusel";
import ContactFormSection from "@/components/contactForm";

export default function Dashboard() {
  const { isAuthenticated, user, login, logout } = useAuth();
  const noticias: Noticia[] = [
    {
      imagen: "/images/noticiasyPrensa.jpg", // Usa tu imagen local
      titulo: "Nuevas certificaciones obtenidas",
      fecha: "15 Agosto, 2025",
      enlace:
        "https://oem.com.mx/elsoldepuebla/local/gobierno-de-puebla-abre-paraestatal-yankuilotl-para-comercializar-semiconductores-24823967",
    },
    {
      imagen: "/images/team.jpg", // Usa tu imagen local
      titulo: "Expansión de nuestro equipo directivo",
      fecha: "10 Agosto, 2025",
      enlace:
        "https://oem.com.mx/elsoldepuebla/local/gobierno-de-puebla-abre-paraestatal-yankuilotl-para-comercializar-semiconductores-24823967",
    },
    {
      imagen: "/images/lineasDeNegocio.jpg", // Usa tu imagen local
      titulo: "Nuevas líneas de negocio implementadas",
      fecha: "5 Agosto, 2025",
      enlace:
        "https://oem.com.mx/elsoldepuebla/local/gobierno-de-puebla-abre-paraestatal-yankuilotl-para-comercializar-semiconductores-24823967",
    },
    {
      imagen: "/images/transparenciaYRendicionDeCuentas.jpeg", // Usa tu imagen local
      titulo: "Informe de transparencia 2025",
      fecha: "1 Agosto, 2025",
      enlace:
        "https://oem.com.mx/elsoldepuebla/local/gobierno-de-puebla-abre-paraestatal-yankuilotl-para-comercializar-semiconductores-24823967",
    },
    {
      imagen: "/images/circuito.png", // Usa tu imagen local
      titulo: "Innovaciones tecnológicas implementadas",
      fecha: "28 Julio, 2025",
      enlace:
        "https://oem.com.mx/elsoldepuebla/local/gobierno-de-puebla-abre-paraestatal-yankuilotl-para-comercializar-semiconductores-24823967",
    },
  ];

  return (
    <div>
      <header>
        <div className="bg-gray-100 border-b-2  border-green-500 h-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
              {/* Información de contacto - lado izquierdo */}
              <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6 text-gray-600">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>222 222 2222</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Puebla de Zaragoza, Puebla, México.</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>yankuilotl@gmail.com</span>
                </div>
              </div>

              {/* Redes sociales - lado derecho */}
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                <span className="text-gray-600 text-sm">Síguenos en:</span>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.348-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <NavBar className="min-h-20 px-4">
          <div className="flex items-center justify-between w-full">
            {/* Sección izquierda - Logo y menú hamburguesa */}
            <div className="flex items-center">
              {/* Menú hamburguesa para móvil */}
              <div className="dropdown lg:hidden mr-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-square"
                >
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
                      INICIO
                    </a>
                  </li>
                  <li>
                    <div className="dropdown dropdown-right">
                      <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center justify-between w-full"
                      >
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                            />
                          </svg>
                          QUIÉNES SOMOS
                        </span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a>Nuestra Historia</a>
                        </li>
                        <li>
                          <a>Misión y Visión</a>
                        </li>
                        <li>
                          <a>Valores</a>
                        </li>
                        <li>
                          <a>Equipo Directivo</a>
                        </li>
                        <li>
                          <a>Certificaciones</a>
                        </li>
                      </ul>
                    </div>
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
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                      LÍNEA DE ENSAMBLAJE
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
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                      NOTICIAS
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      CONTÁCTANOS
                    </a>
                  </li>
                </ul>
              </div>

              {/* Logo */}
              <a
                href={"/dashboard"}
                className="btn btn-ghost text-3xl lg:text-4xl xl:text-5xl text-cyan-800 underline decoration-red-900 decoration-2 normal-case"
              >
                YANKUILOTL
              </a>
            </div>

            {/* Sección central - Menú principal horizontal (desktop) */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <a className="text-base xl:text-lg font-semibold hover:text-red-900 cursor-pointer whitespace-nowrap">
                INICIO
              </a>

              <div className="dropdown dropdown-hover dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="text-base xl:text-lg font-semibold hover:text-red-900 cursor-pointer flex items-center whitespace-nowrap"
                >
                  QUIÉNES SOMOS
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Nuestra Historia</a>
                  </li>
                  <li>
                    <a>Misión y Visión</a>
                  </li>
                  <li>
                    <a>Valores</a>
                  </li>
                  <li>
                    <a>Equipo Directivo</a>
                  </li>
                  <li>
                    <a>Certificaciones</a>
                  </li>
                </ul>
              </div>

              <a className="text-base xl:text-lg font-semibold hover:text-red-900 cursor-pointer whitespace-nowrap">
                LÍNEA DE ENSAMBLAJE
              </a>
              <a className="text-base xl:text-lg font-semibold hover:text-red-900 cursor-pointer whitespace-nowrap">
                NOTICIAS
              </a>
              <a className="text-base xl:text-lg font-semibold hover:text-red-900 cursor-pointer whitespace-nowrap">
                CONTÁCTANOS
              </a>
            </div>

            {/* Sección derecha - Carrito y perfil */}
            <div className="flex items-center space-x-2">
              {/* Carrito */}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">0</span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
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

              {/* Perfil */}
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      {user?.username}
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Ajustes</a>
                  </li>
                  <li>
                    <a onClick={logout} className="cursos-pointer">
                      Cerrar Sesion
                    </a>
                  </li>
                </ul>
              </div>
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
              {isAuthenticated ? (
                <button className="btn btn-primary bg-amber-50 text-black text-2xl rounded-full my-7 h-20 w-60">
                  Bienvenido de vuelta
                </button>
              ) : (
                <Link href={"/login"}>
                  <button className="btn btn-primary bg-amber-50 text-black text-2xl rounded-full my-7 h-20 w-60">
                    Comienza ahora
                  </button>
                </Link>
              )}
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
        <NoticiasPrensaCarousel noticias={noticias} />
        <section>
          <p>{user?.username}</p>
        </section>
        <section className="">
          <ContactFormSection />
        </section>
      </main>
      <footer className="footer sm:footer-horizontal bg-red-900 text-neutral-content p-20">
        <nav>
          <h6 className="font-semibold text-white text-4xl">Links</h6>
          <a className="link link-hover">Inicio</a>
          <a className="link link-hover">Quienes somos</a>
          <a className="link link-hover">Lineas de negocio</a>
          <a className="link link-hover">
            transparencia y rendicion de cuentas
          </a>
          <a>Noticias y prensa</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-4xl">Contactos</h6>
          <a className="link link-hover">telefono: +22222222</a>
          <a className="link link-hover">Email: ejemplo@gmail.com</a>
          <a className="link link-hover">
            Direccion: Puebla de Zaragoza, Puebla, Mexico
          </a>
        </nav>
        <nav>
          <h6 className=" font-semibold text-4xl text-white">
            Ponte en contacto
          </h6>
          <a className="link link-hover">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </a>
        </nav>
      </footer>
    </div>
  );
}
