import {Alert} from 'react-native';

/**
 * Displays a confirmation dialog,
 * cancels or proceeds with described continue action
 * based on user input
 * @param param0
 */
export const displayConfirmationDialog = ({
  title,
  message,
  onContinue,
}: {
  title?: string;
  message?: string;
  onContinue: (props?: any) => void;
}) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'Continue', onPress: () => onContinue()},
    ],
    {cancelable: false},
  );
};
