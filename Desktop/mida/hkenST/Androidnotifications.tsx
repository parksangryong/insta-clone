import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import { Alert, Platform } from 'react-native';

export const Androidnotifications = async () => {
  try {
    if (Platform.OS === 'android') {
      const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
      if (result === RESULTS.DENIED) {
        const requestResult = await request(
          PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
        );
        if (requestResult === RESULTS.GRANTED) {
          // 알람 권한이 허용되었을 때 할 작업
          console.log('알람 권한이 허용되었습니다.');
        } else {
          // 알람 권한이 거부되었을 때 요청
          console.log('알람 권한이 허용되지 않았습니다.');
        }
      } else if (result === RESULTS.GRANTED) {
        // 이미 알람 권한이 허용된 경우
        console.log('알람 권한이 이미 허용되었습니다.');
        return;
      }
    } else {
      return;
    }
  } catch (err) {
    Alert.alert('permission err');
    console.warn(err);
  }
};
