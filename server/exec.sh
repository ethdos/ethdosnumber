python3 python/script.py "$1".json
cd devdos_cpp
./devdos ../input/"$1".json ../input/"$1".wtns
cd ..
../../rapidsnark/build/prover devdos.zkey input/"$1".wtns proof_"$1".json public_"$1".json
python3 combine_files.py proof_"$1".json public_"$1".json joint_"$1".json
cat joint_"$1".json