import ConnectWallet from './ConnectWallet';

export default function PageHeader() {
    return (
        <header className="flex items-center justify-between py-4 px-6 border-b bg-background">
            <h1 className="text-xl font-bold tracking-tight">Monad Pulse</h1>
            <ConnectWallet />
        </header>
    );
} 