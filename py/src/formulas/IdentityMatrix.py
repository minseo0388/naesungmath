def identity_matrix(n: int) -> list[list[int]]:
    res = []
    for i in range(n):
        res.append([])
        for j in range(n):
            if i == j:
                res[i].append(1)
            else:
                res[i].append(0)
    return res
