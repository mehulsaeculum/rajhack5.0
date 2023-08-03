let ERRORS: any = {
  'USER_NOT_FOUND': {
    'CODE': 1,
    'DEFAULT_MESSAGE': 'User Not Found.',
    'HTTP_CODE': 404
  },
  'EMAIL_ALREADY_EXIST': {
    'CODE': 2,
    'DEFAULT_MESSAGE': 'Email already exists.',
    'HTTP_CODE': 400
  },
  'DATA_NOT_FOUND': {
    'CODE': 3,
    'DEFAULT_MESSAGE': 'Data is not found',
    'HTTP_CODE': 404
  },
  'INVALID_EMAIL': {
    'CODE': 4,
    'DEFAULT_MESSAGE': 'You have entered the wrong email',
    'HTTP_CODE': 400
  },
  'ALREADY_EXISTS': {
    'CODE': 5,
    'DEFAULT_MESSAGE': 'Already exists.',
    'HTTP_CODE': 400
  },
  'LOGIN_ATTEMPTS_REACHED': {
    'CODE': 6,
    'DEFAULT_MESSAGE': 'Too many incorrect login attempts, please try after 10 Minutes',
    'HTTP_CODE': 400
  },
  'USER_PASSWORD_NOT_MATCH': {
    'CODE': 7,
    'DEFAULT_MESSAGE': 'Invalid current password.',
    'HTTP_CODE': 400
  },
  'PASSWORD_SAME': {
    'CODE': 8,
    'DEFAULT_MESSAGE': 'New password could not be the same as current password.',
    'HTTP_CODE': 400
  },
  'RESET_LINK_NOT_FOUND': {
    'CODE': 9,
    'DEFAULT_MESSAGE': 'Reset link not found.',
    'HTTP_CODE': 404
  },
  'RESET_LINK_EXPIRED': {
    'CODE': 10,
    'DEFAULT_MESSAGE': 'Reset link has been expired.',
    'HTTP_CODE': 400
  },
  'SERVER_ERROR': {
    'CODE': 11,
    'DEFAULT_MESSAGE': 'Server error. Please try again after some time.',
    'HTTP_CODE': 500
  },
  'INVALID_PASSWORD': {
    'CODE': 12,
    'DEFAULT_MESSAGE': 'You have entered the wrong password',
    'HTTP_CODE': 400
  },
  'YOUR_ACCOUND_INACTIVE': {
    'CODE': 13,
    'DEFAULT_MESSAGE': 'Your account has been inactivated. Please contact admin for more details.',
    'HTTP_CODE': 403
  },
  'USER_DELETE_ACTION_FORBIDDEN': {
    'CODE': 14,
    'DEFAULT_MESSAGE': 'Sorry, you can not delete your own account.',
    'HTTP_CODE': 403
  },
  'ROLE_USED': {
    'CODE': 15,
    'DEFAULT_MESSAGE': 'This role is assigned to user.',
    'HTTP_CODE': 400
  },
  'SOMETHING_WENT_WRONG': {
    'CODE': 16,
    'DEFAULT_MESSAGE': 'Something went wrong. Please try again.',
    'HTTP_CODE': 400
  },
  'SLUG_NOT_FOUND': {
    'CODE': 17,
    'DEFAULT_MESSAGE': 'Slug is not found',
    'HTTP_CODE': 404
  },
  'SLUG_ALREADY_EXISTS': {
    'CODE': 18,
    'DEFAULT_MESSAGE': 'The slug has been taken.',
    'HTTP_CODE': 400
  },
  'TARGET_NOT_SELECTED': {
    'CODE': 19,
    'DEFAULT_MESSAGE': 'Target is not selected by the user.',
    'HTTP_CODE': 400
  },
  'USER_STATUS_UPDATE_ACTION_FORBIDDEN': {
    'CODE': 20,
    'DEFAULT_MESSAGE': 'Sorry, you can not change the status of your own account.',
    'HTTP_CODE': 403
  },
  'USER_ROLE_UPDATE_ACTION_FORBIDDEN': {
    'CODE': 21,
    'DEFAULT_MESSAGE': 'Sorry, you can not change the role of your own account.',
    'HTTP_CODE': 403
  },
  'ROLE_DELETE_ACTION_FORBIDDEN': {
    'CODE': 22,
    'DEFAULT_MESSAGE': 'This role can not be deleted.',
    'HTTP_CODE': 403
  },
  'ROLE_UPDATE_ACTION_FORBIDDEN': {
    'CODE': 23,
    'DEFAULT_MESSAGE': 'This role can not be updated.',
    'HTTP_CODE': 403
  },
  'NO_FILE_UPLOADED': {
    'CODE': 24,
    'DEFAULT_MESSAGE': 'No file was uploaded.',
    'HTTP_CODE': 404
  },
  'FILE_TYPE_ERROR': {
    'CODE': 25,
    'DEFAULT_MESSAGE': 'Invalid file type.',
    'HTTP_CODE': 400
  },
  'GCP_UPLOAD_FAILED': {
    'CODE': 26,
    'DEFAULT_MESSAGE': 'Unable to upload image, something went wrong.',
    'HTTP_CODE': 400
  }
}

export { ERRORS }