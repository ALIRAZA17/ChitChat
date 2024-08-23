import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageDTO } from './dto/create-chat-completion.request';
import { ChatCompletionMessageParam } from 'openai/resources';

@Injectable()
export class OpenaiService {
    constructor(private readonly openai: OpenAI) {}

    async createChatCompletion(messages: ChatCompletionMessageDTO[]) {
        return this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: messages as ChatCompletionMessageParam[],
        })

    }
}
