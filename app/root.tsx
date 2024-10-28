import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";

import "./tailwind.css";

export const loader = ({ params } : LoaderFunctionArgs ) => {

  return {
    language: params.lang
  }
}

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <div className={'container mx-auto p-8'}>
      <div className='flex flex-row justify-between gap-4'>
        <ul className={'flex flex-row '}>
          <li>
            <Link to={ loaderData.language ? `/${loaderData.language}/` : '/'}>Home</Link>
          </li>
          <li>
            <Link to={loaderData.language ? `/${loaderData.language}/brands` : '/brands'}>Brands</Link>
          </li>
        </ul>
        <ul className={'flex flex-row gap-2.5 text-2xl'}>
          <li>
            <Link to={'/'}>
              🇺🇸
            </Link>
          </li>
          <li>
            <Link to={'/nl'}>
              🇳🇱
            </Link>
          </li>
        </ul>
      </div>
      <div className={"container mx-auto pt-8"}>
        <Outlet />
      </div>
    </div>
  );
}
