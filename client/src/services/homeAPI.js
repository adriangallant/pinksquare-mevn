import API from '@/services/api';

export default {
  getUsers () {
    return API().get('');
  }
}