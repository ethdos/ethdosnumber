import json
import sys

if len(sys.argv) != 4:
    print("Usage: python3 script.py <input_file> <pub file> <joint file>")
    exit(1)

proof_filename = sys.argv[1]
pub_filename = sys.argv[2]
joint_filename = sys.argv[3]

with open(proof_filename, 'r') as proof_file:
    proof_data = proof_file.read()
proof = json.loads(proof_data)

with open(pub_filename, 'r') as pub_file:
    pub_data = pub_file.read()
pub = json.loads(pub_data)

joint = {"proof": proof, "pubInputs": pub}

with open(joint_filename, 'w') as outfile:
    json.dump(joint, outfile)
