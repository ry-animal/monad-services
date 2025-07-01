export default function PageFooter() {
    return (
        <footer className="py-4 px-6 border-t text-xs text-muted-foreground bg-background text-center">
            &copy; {new Date().getFullYear()} Monad Pulse. All rights reserved.
        </footer>
    );
} 