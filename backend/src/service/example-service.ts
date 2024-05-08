import { secureDatabase, secureStorage, SquidService } from '@squidcloud/backend';
import { StorageContext } from '@squidcloud/client';

/**
 * Here you can define different backend functions that:
 * 1 - Can be called from the frontend
 * 2 - Can secure data access
 * 3 - Can be called as a trigger
 * 4 - Can define a webhook
 * 5 - Can be called as a scheduler
 * 6 - And more
 *
 * Note: This code will be executed in a secure environment and can perform any operation including database access,
 * API calls, etc.
 *
 * For more information and examples see: https://docs.squid.cloud/docs/development-tools/backend/
 */
export class ExampleService extends SquidService {
  // TODO: !!!IMPORTANT!!! - Replace this function with your own granular security rules
  @secureDatabase('all', 'built_in_db')
  allowAllAccessToBuiltInDb(): boolean {
    return true;
  }

  // Allow clients to upload files to the `user` directory
  @secureStorage('write', 'built_in_storage')
  allowWriteOwnStorage(context: StorageContext): boolean {
    for (const path of context.pathsInBucket) {
      if (!path.startsWith('user')) {
        return false;
      }
    }
    return true;
  }

  // Allow users to create download URLs and download files from the storage bucket
  @secureStorage('read', 'built_in_storage')
  allowAllAccessToBuiltInStorage(): boolean {
    return true;
  }
}
