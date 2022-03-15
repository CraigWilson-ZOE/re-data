---
sidebar_position: 4
---

# Notifications

Notifications are a great way to stay up to date with activities in your warehouse. You can let re_data send you notifications for alerts that occured within a specified date range.

re_data currently supports the following channels for notifications.

## Slack
To send alerts to a slack channel, we make use of [incoming webhooks](https://api.slack.com/messaging/webhooks) which is a simple way to post messages from apps into Slack.

The steps required to enable incoming webhooks and get started can be found in the slack [API docs](https://api.slack.com/messaging/webhooks#enable_webhooks). Once you have created an incoming webhook successfully, you should see a new entry under Webhook URLs for Your Workspace section, with a Webhook URL that'll look something like this:
```
https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
```

The webhook url can now be used with the re_data notify command as shown below,

```bash
re_data notify slack \
--start-date 2021-01-01 \
--end-date 2021-01-31 \
--webhook-url https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX \
--subtitle="[Optional] Markdown text to be added as a subtitle in the slack message generated"
```

Below is a sample alert notification message sent by a slack app created.

![SlackMessage](/screenshots/notifications/slack_notification_message.png)

By default, the most recent 20 alerts are shown and you can generate the Observability UI to show more details relating to alerts.

## Want to learn more?

Check out the rest of re_data docs, or ask as on **[Slack! 😊](https://www.getre.io/slack)** (we are very responsive there)