const GENERAL = {
  env: 'development'
}

const MEDIA_TYPE = {
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  DOCUMENT: 'document'
}

const MEDIA_FILE_TYPE = {
  ORIGINAL: 'original',
  THUMBNAIL: 'thumbnail',
  ASSET: 'asset'
}

const MEDIA_VALIDATION: any = {
  IMAGE: {
    ORIGINAL: {
      SIZE: 5,
      MIME: ['image/jpeg', 'image/webp', 'image/avif', 'image/png'],
      DIMENSION: []
    },
    THUMBNAIL: {
      SIZE: 5,
      MIME: ['image/jpeg', 'image/webp', 'image/avif', 'image/png'],
      DIMENSION: []
    }
  },
  VIDEO: {
    ORIGINAL: {
      SIZE: 100,
      MIME: ['video/mp4'],
      DIMENSION: []
    },
    THUMBNAIL: {
      SIZE: 5,
      MIME: ['image/jpeg', 'image/webp', 'image/avif', 'image/png'],
      DIMENSION: []
    }
  },
  AUDIO: {
    ORIGINAL: {
      SIZE: 200,
      MIME: ['audio/mpeg', 'audio/wav', 'audio/wave', 'audio/mp4', 'video/mp4', 'audio/x-ms-wma', 'audio/aiff',
      'audio/x-m4a', 'audio/x-mpeg', 'audio/mpeg4-generic', 'audio/aac', 'audio/x-aac'],
      DIMENSION: []
    },
    THUMBNAIL: {
      SIZE: 5,
      MIME: ['image/jpeg', 'image/webp', 'image/avif', 'image/png'],
      DIMENSION: []
    }
  },
  DOCUMENT: {
    ORIGINAL: {
      SIZE: 10,
      MIME: [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.ms-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
        'application/vnd.oasis.opendocument.text',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/plain',
        'application/rtf',
      ],
      DIMENSION: []
    },
    THUMBNAIL: {
      SIZE: 5,
      MIME: ['image/jpeg', 'image/webp', 'image/avif', 'image/png'],
      DIMENSION: []
    }
  }
}

const MEDIA_UNIT = {
  HEIGHT: 'px', // pixel
  WIDTH: 'px',  // pixel
  LENGTH: 's', // second
  SIZE: 'KB'  // kilobyte
}

export { GENERAL, MEDIA_TYPE, MEDIA_FILE_TYPE, MEDIA_VALIDATION, MEDIA_UNIT }