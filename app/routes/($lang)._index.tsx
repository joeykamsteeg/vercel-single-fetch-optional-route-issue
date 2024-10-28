import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

export const config = { runtime: 'edge' };

export const loader = ( { params }: LoaderFunctionArgs  ) => {

  return {
    language: params.language ?? 'en'
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: "Homepage" }
  ];
};

export default function Index() {
  return (
    <div>
      Home Page
    </div>
  );
}
