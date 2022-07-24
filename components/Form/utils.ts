export const nameRegex = /[A-Za-zА-Яа-я\s]{2,60}/g
export const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
export const phoneRegex = /^\+380\d{9}$/g
export const photoFormatRegex = /(jpeg)|(jpg)/