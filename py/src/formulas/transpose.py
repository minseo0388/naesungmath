def transpose(mat: list[list[float]]) -> list[list[float]]:
    res = []
    for i in range(len(mat[0])):
        res.append([])
        for j in range(len(mat)):
            res[i].append(mat[j][i])
    return res
