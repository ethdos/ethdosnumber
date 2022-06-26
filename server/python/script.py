
from ast import arg
from py_ecc.fields import (
    bn128_FQ as FQ,
    bn128_FQ2 as FQ2,
    bn128_FQ12 as FQ12,
)
from py_ecc.bn128 import (
    bn128_curve as curve
)
from field_helper import (
    numberToArray,
    numberToBase,
    hamming_weight,
    printEllipticPoint,
    printFQ,
    printFQ2,
    Fp12convert,
    printFQ12,
    print_fq12_frobenius_coeff
)
import math

from py_ecc.fields import (
    bn128_FQ as FQ,
    bn128_FQ2 as FQ2,
    bn128_FQ12 as FQ12,
)
from py_ecc.bn128 import (
    bn128_curve as curve,
    bn128_pairing as pairingw
)
import json
import sys

# get cli arg
if len(sys.argv) != 2:
    print("Usage: python3 script.py <input_file>")
    exit(1)

input_filename = sys.argv[1]
with open("../preinput/" + input_filename, 'r') as input_file:
    input_data = input_file.read()
input_json = json.loads(input_data)
proof = input_json["proof"]
pubInputs = input_json["pubInputs"]


with open('vkey.json', 'r') as vkey_file:
    vkey_data = vkey_file.read()
vkey = json.loads(vkey_data)

x, y, z = tuple([FQ((int(x))) for x in vkey["vk_alpha_1"]]) 
negalpha = ( x / z, -(y / z) )
# print("negalpha", negalpha)

x, y, z = tuple([ FQ2([int(x[0]), int(x[1])]) for x in vkey["vk_beta_2"]])
beta = ( x / z, y / z )

# print("beta", beta)


x, y, z = tuple([ FQ2([int(x[0]), int(x[1])]) for x in vkey["vk_gamma_2"]])
gamma = ( x / z, y / z )

# print("gamma", gamma)


x, y, z = tuple([ FQ2([int(x[0]), int(x[1])]) for x in vkey["vk_delta_2"]])
delta = ( x / z, y / z )

# print("delta", delta)

public_input_count = vkey["nPublic"]

ICs = []
for i in range(public_input_count + 1):
    x, y, z = tuple([ FQ(int(x)) for x in vkey["IC"][i]])
    ICs.append( ( x / z, y / z ) )

negalphabeta = pairing.pairing( beta, negalpha )
#print("negalphabeta", negalphabeta)

def Fpconvert(X, n, k):
    return numberToArray(X.n, n, k)

def Fp2convert(X, n, k):
    return [ numberToArray(X.coeffs[0].n, n, k) , numberToArray(X.coeffs[1].n, n, k) ]

def Fp12convert(X, n, k):
    basis1 = X.coeffs
    ret = []
    for i in range(6):
        fq2elt = FQ2([basis1[i].n, 0]) + FQ2([basis1[i+6].n, 0]) * FQ2([9,1])
        ret.append(Fp2convert(fq2elt, n, k))
    return ret

n = 43
k = 6

inputParameters = {
    "gamma2": [ Fp2convert(gamma[0], n, k), Fp2convert(gamma[1], n, k)],
    "delta2": [ Fp2convert(delta[0], n, k), Fp2convert(delta[1], n, k)],
    "negalfa1xbeta2": Fp12convert(negalphabeta, n, k),
    "IC": [[Fpconvert(IC[0], n, k), Fpconvert(IC[1], n, k)] for IC in ICs],
}

print("inputParameters", inputParameters)

# with open('proof.json', 'r') as proof_file:
#     proof_data = proof_file.read()
# proof = json.loads(proof_data)

x, y, z = tuple([FQ((int(x))) for x in proof["pi_a"]]) 
negpi_a = (x / z, - (y / z))

x, y, z = tuple([ FQ2([int(x[0]), int(x[1])]) for x in proof["pi_b"]])
pi_b = (x / z, y / z)

x, y, z = tuple([FQ((int(x))) for x in proof["pi_c"]]) 
pi_c = (x / z, y / z)

proofParameters = {
    "negpa": [Fpconvert(negpi_a[0], n, k), Fpconvert(negpi_a[1], n, k)],
    "pb": [ Fp2convert(pi_b[0], n, k), Fp2convert(pi_b[1], n, k)],
    "pc": [Fpconvert(pi_c[0], n, k), Fpconvert(pi_c[1], n, k)],
}

print("proofParameters", proofParameters)

# with open('public.json', 'r') as public_file:
#     public_data = public_file.read()
# pubInputs = json.loads(public_data)

# pubParameters  = {
#     "pubInput": [],
# }
# for pubInput in pubInputs:
#     pubParameters["pubInput"].append(int(pubInput))

# print("pubParameters", pubParameters)

fullCircomInput = {**inputParameters, **proofParameters}

fullCircomInput["semiPublicCommitment"] = "7138597452374049843442357986628673314690363139209617000292486089713270058062"
fullCircomInput["degree"] = int(pubParameters[1]) + 1
fullCircomInput["originator"] = pubParameters[2]


with open('../input/' + input_filename, 'w') as outfile:
    json.dump(fullCircomInput, outfile)

