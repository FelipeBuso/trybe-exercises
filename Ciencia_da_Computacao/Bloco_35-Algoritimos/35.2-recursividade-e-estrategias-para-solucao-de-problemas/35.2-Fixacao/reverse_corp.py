def reverse(list):
    reverse_list = []
    for i in list[::-1]:
        reverse_list.append(i)
    return reverse_list


def reverse2(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]
