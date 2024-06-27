import {NextResponse} from 'next/server';
import { lobbies } from '@/app/utils/lobbies-store';

export async function POST(req: Request) {
    const { lobbyId, playerName } = req.body;

    if (lobbies.has(lobbyId)){
        const lobby = lobbies.get(lobbyId);
        lobby?.players.push(playerName);
        return NextResponse.json({
            players: lobby?.players
        });
    } else {
        return NextResponse.error();
    }
}
