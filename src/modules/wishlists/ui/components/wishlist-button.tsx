"use client";
import LikeButton from "@/components/LikeButton";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const WishListButton = ({ productId, className }: { productId: string; className?: string }) => {

  const trpc = useTRPC();

  const queryClient = useQueryClient();

  const toggleWishlist = useMutation(trpc.wishlist.toggle.mutationOptions({
    onSuccess: () => {
      queryClient.invalidateQueries(trpc.wishlist.isInWishlist.queryOptions({ productId }));
      queryClient.invalidateQueries(trpc.wishlist.getMany.queryOptions());

    }
  }));

  const {data: isInWishlist} = useQuery(trpc.wishlist.isInWishlist.queryOptions({ productId }));

  const handleToggleWishlist = () => {
    toggleWishlist.mutate({ productId });
  };

  return (
    <LikeButton
      liked={isInWishlist}
      onClick={handleToggleWishlist}
      className={className}
    />
  );
};