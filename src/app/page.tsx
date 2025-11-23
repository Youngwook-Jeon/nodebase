import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return <div className="text-red-500">
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading...</p>}>
        Hi
      </Suspense>
    </HydrationBoundary>
  </div>;
}
