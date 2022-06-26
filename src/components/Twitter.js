// To display the Twitter iFrame
import { TwitterTimelineEmbed} from 'react-twitter-embed';

export default function Twitter() {
    return (
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="LoganToChelsea"
        options={{height: 400}}
        tweetLimit="3"
        noHeader="true"
        noFooter="true"
      />
    )
}

