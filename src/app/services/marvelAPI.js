/* eslint no-process-env:0 */
import axios from 'axios';
import CryptoJS  from 'crypto-js';
import moment from 'moment';

const config = {
  API_PUBLIC: '298bab46381a6daaaee19aa5c8cafea5',
  API_PRIVATE: 'b0223681fced28de0fe97e6b9cd091dd36a5b71d',
  BASE_URL: `${window.location.protocol || 'http'}//gateway.marvel.com:80`
};

export const getCharacters = () => {
  const URI = '/v1/public/characters';
  const url = `${config.BASE_URL}${URI}`;
  const timeStamp = moment().unix();

  const queryParams = {
    ts: timeStamp,
    apikey: config.API_PUBLIC,
    hash: CryptoJS.MD5(timeStamp + config.API_PRIVATE + config.API_PUBLIC).toString(CryptoJS.enc.Hex)
  };

  return axios
          .get(url, { params: queryParams })
          .then((response) => Promise.resolve(response.data))
          .catch((error) => Promise.reject(error));
};


export const getCharacterInfo = (characterId = null) => {
  if (characterId) {
    const URI = '/v1/public/characters';
    const url = `${config.BASE_URL}${URI}/${characterId}`;
    const timeStamp = moment().unix();

    const queryParams = {
      ts: timeStamp,
      apikey: config.API_PUBLIC,
      hash: CryptoJS.MD5(timeStamp + config.API_PRIVATE + config.API_PUBLIC).toString(CryptoJS.enc.Hex)
    };

    return axios
            .get(url, { params: queryParams })
            .then((response) => Promise.resolve(response.data))
            .catch((error) => Promise.reject(error));
  }
  return Promise.reject({message: 'characterId is not defined'});
};
