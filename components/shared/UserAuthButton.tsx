import { LinkButton } from "@neup/components/ui/link-button";
import { Avatar, AvatarFallback, AvatarImage } from "@neup/components/ui/avatar";
import type { UserProfile } from "@/lib/session";

export function UserAuthButton({ user }: { user: UserProfile | null }) {
    const isAuthenticated = !!user && user.accountType !== "guest" && !!user.neupId;

    if (user && isAuthenticated) {
        const fallbackInitial = (user.displayName || user.neupId || "U").charAt(0).toUpperCase();

        return (
            <LinkButton
                href="/account"
                variant="outline"
                className="flex items-center gap-3 pl-4 pr-1 py-1 h-auto rounded-full border-input hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
                <span className="text-sm font-medium">Get Inside</span>
                <Avatar className="h-8 w-8">
                    <AvatarImage src={user.displayImage} alt={user.displayName || user.neupId || "User"} />
                    <AvatarFallback>{fallbackInitial}</AvatarFallback>
                </Avatar>
            </LinkButton>
        );
    }

    return (
        <LinkButton
            href="/account/auth/start"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
        >
            Sign In
        </LinkButton>
    );
}
