declare module '@rafateoli/discord-ytdl-core' {
    import ytdl, { downloadOptions } from '@distube/ytdl-core';
    import { opus as Opus, FFmpeg } from 'prism-media';
    import { Readable, Duplex } from 'stream';

    interface YTDLStreamOptions extends downloadOptions {
        seek?: number;
        encoderArgs?: string[];
        fmt?: string;
        opusEncoded?: boolean;
    }

    interface StreamOptions {
        seek?: number;
        encoderArgs?: string[];
        fmt?: string;
        opusEncoded?: boolean;
    }

    const DiscordYTDLCore: {
        (url: string, options: YTDLStreamOptions): Opus.Encoder | FFmpeg;
        arbitraryStream: (
            stream: string | Readable | Duplex,
            options: StreamOptions
        ) => Opus.Encoder | FFmpeg;
        YTDLStreamOptions;
        StreamOptions;
    } & typeof ytdl;

    export = DiscordYTDLCore;
}
