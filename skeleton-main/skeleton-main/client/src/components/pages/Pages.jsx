/*import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/homepage')
      .then(response => response.text())
      .then(html => {
        setContent(html);
      })
      .catch(error => {
        console.error('Error fetching homepage:', error);
      });
  }, []);

 return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};



export default Homepage;
import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [homepageContent, setHomepageContent] = useState('');
  const [secondEndpointContent, setSecondEndpointContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/homepage')
      .then(response => response.text())
      .then(html => {
        setHomepageContent(html);
      })
      .catch(error => {
        console.error('Error fetching homepage:', error);
      });

    // Fetch content from the second API endpoint
    fetch('http://localhost:3000/api/loggedin.html')
      .then(response => response.text())
      .then(html => {
        setSecondEndpointContent(html);
      })
      .catch(error => {
        console.error('Error fetching loggedin.html:', error);
      });
  }, []);

  return (
      <div dangerouslySetInnerHTML={{ __html: homepageContent }} />
  );
});
}

export default Homepage;
*/
/*  
import React, { useEffect, useState } from 'react';
import Homepage from '/Homepage.jsx';
import LoggedIn from '/LoggedIn.jsx';
import EasyMode from '/EasyMode.jsx';
import NormalMode from '/NormalMode.jsx';
import LeaderPage from '/LeaderPage.jsx';
import AccountSetts from '/AccountSetts.jsx';
import ProMode from '/ProMode.jsx';
import PlayStage from './PlayStage.jsx';
const Pages = () => {
  const [homepageContent, setHomepageContent] = useState('');
  const [loggedinContent, setLoggedinContent] = useState('');
  const [easyModeContent, setEasyModeContent] = useState('');
  const [leaderPageContent, setLeaderPageContent] = useState('');
  const [accountSettsContent, setAccountSettsContent] = useState('');
  const [normalModeContent, setNormalModeContent] = useState('');
  const [proModeContent, setProModeContent] = useState('');
  const [playStageContent, setPlayStageContent] = useState('');
  useEffect(() => {
    const fetchContent = async (url, setContent) => {
      try {
        const response = await fetch(url);
        const html = await response.text();
        setContent(html);
      } catch (error) {
        console.error(`Error fetching ${url}:`, error);
      }
    };

    fetchContent('http://localhost:3000/api/homepage', setHomepageContent);
    fetchContent('http://localhost:3000/api/loggedin', setLoggedinContent);
    fetchContent('http://localhost:3000/api/playstage', setPlayStageContent);
    fetchContent('http://localhost:3000/api/easymode', setEasyModeContent);
    fetchContent('http://localhost:3000/api/leaderpage', setLeaderPageContent);
    fetchContent('http://localhost:3000/api/accountsetts', setAccountSettsContent);
    fetchContent('http://localhost:3000/api/normalmode', setNormalModeContent);
    fetchContent('http://localhost:3000/api/promode', setProModeContent);
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: homepageContent }} />
      <div dangerouslySetInnerHTML={{ __html: loggedinContent }} />
      <div dangerouslySetInnerHTML={{ __html: easyModeContent }} />
      <div dangerouslySetInnerHTML={{ __html: leaderPageContent }} />
      <div dangerouslySetInnerHTML={{ __html: accountSettsContent }} />
      <div dangerouslySetInnerHTML={{ __html: normalModeContent }} />
      <div dangerouslySetInnerHTML={{ __html: proModeContent }} />
      <div dangerouslySetInnerHTML={{ __html: playStageContent }} />
      <Homepage />
      <LoggedIn />
      <EasyMode />
      <NormalMode />
      <LeaderPage />
      <AccountSetts />
      <ProMode />
      <PlayStage />
    </div>
  );
};

export default Pages;*/

import React, { useEffect, useState } from 'react';

const Pages = () => {
  const [homepageContent, setHomepageContent] = useState('');
  const [loggedinContent, setLoggedinContent] = useState('');
  const [playStageContent, setPlayStageContent] = useState('');
  const [easyModeContent, setEasyModeContent] = useState('');
  const [leaderPageContent, setLeaderPageContent] = useState('');
  const [accountSettsContent, setAccountSettsContent] = useState('');
  const [normalModeContent, setNormalModeContent] = useState('');
  const [proModeContent, setProModeContent] = useState('');

  const fetchContent = async (url, setContent) => {
    try {
      const response = await fetch(url);
      const data = await response.text();
      setContent(data);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  useEffect(() => {
    fetchContent('http://localhost:3000/api/homepage', setHomepageContent);
    fetchContent('http://localhost:3000/api/loggedin', setLoggedinContent);
    fetchContent('http://localhost:3000/api/playstage', setPlayStageContent);
    fetchContent('http://localhost:3000/api/easymode', setEasyModeContent);
    fetchContent('http://localhost:3000/api/leaderpage', setLeaderPageContent);
    fetchContent('http://localhost:3000/api/accountsetts', setAccountSettsContent);
    fetchContent('http://localhost:3000/api/normalmode', setNormalModeContent);
    fetchContent('http://localhost:3000/api/promode', setProModeContent);
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: homepageContent }} />
      <div dangerouslySetInnerHTML={{ __html: loggedinContent }} />
      <div dangerouslySetInnerHTML={{ __html: playStageContent }} />
      <div dangerouslySetInnerHTML={{ __html: easyModeContent }} />
      <div dangerouslySetInnerHTML={{ __html: leaderPageContent }} />
      <div dangerouslySetInnerHTML={{ __html: accountSettsContent }} />
      <div dangerouslySetInnerHTML={{ __html: normalModeContent }} />
      <div dangerouslySetInnerHTML={{ __html: proModeContent }} />
    </div>
  );
};

export default Pages;