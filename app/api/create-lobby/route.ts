import {NextRequest, NextResponse} from 'next/server';
import { lobbies } from '@/app/utils/lobbies-store';

export async function POST() {
    const newLobbyId = Math.random().toString().substring(4);
    lobbies.set(newLobbyId, { players: [] })

    return NextResponse.json({
        id: newLobbyId
    });
}