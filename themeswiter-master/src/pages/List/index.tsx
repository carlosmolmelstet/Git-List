import React, { useEffect, useState } from 'react';
import { useParams,  match } from 'react-router-dom';

import { Container, Wrapper, Profile, Repo } from './styles';

import local from '../../utils/images/local.svg';
import organization from '../../utils/images/organization.svg';
import twitter from '../../utils/images/twitter.svg';
import following from '../../utils/images/following.svg';
import followers from '../../utils/images/followers.svg';
import github from '../../utils/images/github.svg';
import star from '../../utils/images/star.svg';
import api from '../../api';
import NotFound from '../NotFound';


interface User {

  id: number;
  name: string;
  avatar_url: string;
  login: string;
  url: string;
  html_url: string;
  company: string;
  location: string;
  bio: string;
  twitter_username: string;
  followers: number;
  following: number;
  // images: Array<{
  //   id: number;
  //   url: string;
  // }>
}

interface Repos {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: string;

}

interface Usuario {
  id: string;
  name: string
}

interface Usuario {
  id: string;
  name: string
}



interface Identifiable {
  name: string; 
}
const List: React.FC = () => {
  const params = useParams<Usuario>();
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<Repos[]>([]);
  
  useEffect(() => {
    api.get(`${params.name}`).then(response => {
      setUser(response.data);
    });
  }, [params.name]);
  
  useEffect(() => {
    api.get(`${params.name}/repos`).then(response => {
      setRepos(response.data);
    });
  }, [params.name]);

  
  if (!user) {

    return (
      <NotFound />
    );

  } 
  
  
  
  
  return (
    <Container>
        <Wrapper>
          <Profile>
            <div className="description">
              <div className="photo">
                <img src={user.avatar_url} alt="name"/>
              </div>
              <div className="names">
                <h1>{user.name}</h1>
                  <span>@{user.login}</span>
                  <p>{user.bio}</p>
              </div>
            </div>
            <div className="infos">
              <div className="infoItem">
               <img src={local} alt=""/> {user.location} <br/>
              </div>
                <div className="infoItem">
                  <img src={organization} alt=""/> {user.company} <br/>
                </div>  
              <a target="_blake" href={`https://twitter.com/${user.twitter_username}`}>
                <div className="infoItem">
                  <img src={twitter} alt=""/>{user.twitter_username} <br/>
                </div>
              </a>
            </div>
            <div className="footer">
              <div className="followers">
                <div className="followersItem">
                 <img src={followers} alt=""/> {user.followers} seguidores
                </div>
                <div className="followersItem">
                 <img src={following} alt=""/> {user.following} seguindo
                </div>
                
              </div>
              <div className="btn">
                <a target="_blake" href={user.html_url}>
                  <button>
                    <p>VER NO GITHUB</p> 
                    <img src={github} alt=""/>
                  </button>
                </a>
              </div>
              </div>
          </Profile>
            {repos.map(repo => (
              <Repo key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="footerRepo">
                <div className="stars">
                  <img src={star} alt=""/>
                  {repo.stargazers_count}
                </div>
                <div className="btn">
                    <a target="_blake" href={repo.html_url}>
                      <button>
                        <p>VER REPOSITORIO</p> 
                        <img src={github} alt=""/>
                      </button>
                    </a>
                  </div>
              </div>
            </Repo>
          ))}

        </Wrapper>
      </Container>
  );
}

export default List;