'use client';

import { Button } from '@/components/ui/button';

const EMOJI_OPTIONS = [
    { id: 1, emoji: '👍', label: 'Like' },
    { id: 2, emoji: '❤️', label: 'Love' },
    { id: 3, emoji: '🔥', label: 'Fire' },
    { id: 4, emoji: '🚀', label: 'Rocket' },
    { id: 5, emoji: '😂', label: 'Laugh' },
];

type EmojiPickerProps = {
    onSelect: (emojiId: number) => void;
    disabled?: boolean;
};

export default function EmojiPicker({ onSelect, disabled }: EmojiPickerProps) {
    return (
        <div className="flex gap-1">
            {EMOJI_OPTIONS.map((option) => (
                <Button
                    key={option.id}
                    onClick={() => onSelect(option.id)}
                    variant="ghost"
                    size="sm"
                    disabled={disabled}
                    className="h-8 w-8 p-0"
                    title={option.label}
                >
                    {option.emoji}
                </Button>
            ))}
        </div>
    );
} 