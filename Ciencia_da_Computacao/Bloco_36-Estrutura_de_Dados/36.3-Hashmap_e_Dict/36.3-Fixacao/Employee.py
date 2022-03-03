class Employee:
  def __init__(self, id_num, name):
    self.id_num = id_num
    self.name = name
  


class Hashmap:
  def __init__(self):
    self._buckets = [None for i in range(10)]

  def get_adress(self, id_num):
    return id_num % 10

  def insert(self, employee):
    adress = self.get_adress(employee.id_num)
    self._buckets[adress] = employee

  def get_value(self, id_num):
    address = self.get_adress(id_num)
    return self._buckets[address].name
  
  def has(self, id_num):
    adress = self.get_adress(id_num)
    return self._buckets[adress] is not None
  
  def update_value(self, id_num, new_name):
    adress = self.get_adress(id_num)
    self._buckets[adress].name = new_name

if __name__ == "__main__":

  employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
  registry = Hashmap()

  for id_num, name in employees:
    employee = Employee(id_num, name)
    registry.insert(employee)
  
  print(registry.get_value(23))