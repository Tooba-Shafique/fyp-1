import React, { useEffect } from "react";

import { createChat } from "@n8n/chat";

const ChatBot = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://your-webhook-url.com/', // ✅ replace with your actual webhook
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        'Hi there! 👋',
        'My name is Nathan. How can I assist you today?'
      ],
      i18n: {
        en: {
          title: 'Hi there! 👋',
          subtitle: "Start a chat. We're here to help you 24/7.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
        },
      },
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default ChatBot;
