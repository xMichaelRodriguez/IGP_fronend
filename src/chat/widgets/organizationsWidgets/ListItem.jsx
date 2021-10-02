import React from 'react'

import { ListImage } from './ListImage'
import { OfficerEmail } from './OfficerEmail'
import { OfficerName } from './OfficerName'
import { SocialNetworks } from './SocialNetworks'
import { Website } from './Website'
export const ListItem = (org) => {
  return (
    <li className='card mb-3 shadow' key={org.acronym}>
      <div className='card-body'>
        <ListImage avatar={org.avatar_file_url} />

        <ul className='list-group'>
          <OfficerName officerName={org.officer_name} />
          {org.website_url && <Website websideURL={org.webside_url} />}

          <SocialNetworks
            twitterURL={org.twitter_url}
            facebookURL={org.facebook_url}
            youtubeURL={org.youtube_url}
          />
        </ul>
        <OfficerEmail officerEmail={org.officer_email} />
      </div>
    </li>
  )
}
