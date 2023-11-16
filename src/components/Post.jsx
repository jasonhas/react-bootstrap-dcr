import React from 'react'

const Post = () => {

    const iw = window.iw;
    const dcr = iw.getPropertyValue('D006')

  return (
    <div id="D006">
        <h2>{dcr.dcrContent.Content.Title}</h2>
        <p className='pt-4 fst-italic'>{dcr.dcrContent.Content.Pub_Date}</p>
        <div dangerouslySetInnerHTML={{ __html: dcr.dcrContent.Content.Details}}></div>

        <div>
            <h3>Links</h3>
            <ul className='list-unstyled'>
                {dcr.dcrContent.Content.Links.Link.map((link, index) =>
                    <li className='text-left'><a href={link.TargetUrl} target='blank'>{link.Label}</a></li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Post