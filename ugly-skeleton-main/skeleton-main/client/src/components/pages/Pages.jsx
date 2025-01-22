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