import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/create-chat-completion.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}
  @Post('chatCompletion')
  async createChatCompletion(
    // The @Body() decorator extracts the request body from the incoming HTTP request and maps it to the body parameter. In this case, body is expected to be an instance of CreateChatCompletionRequest.
    @Body() body: CreateChatCompletionRequest,
  ) {
    return this.openaiService.createChatCompletion(body.messages);
  }
}
