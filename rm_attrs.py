import os
import glob
import sys

def delete_files(directory, extension):
    # Use os.walk for recursive search
    for dirpath, dirnames, filenames in os.walk(directory):
        # Use glob pattern matching -> comparison is done by filename, not file content.
        for filename in glob.glob(os.path.join(dirpath, '*.' + extension)):
            # print("Deleting file ", filename)
            os.remove(filename)

# Call the function with the directory and extension as parameters
# Get directory from command line arguments
directory = sys.argv[1]
delete_files(directory, 'attrs')
