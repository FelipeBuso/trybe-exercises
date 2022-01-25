class ItemPedido:
    def __init__(self, produto, preço, quantidade):
        self.produto = produto
        self.preço = preço
        self.quantidade = quantidade

    def total_item_pedido(self):
        return { 
            "produto": self.produto,
            "qtde": self.quantidade,
            "preço unit": self.preço,
            "total": self.preço * self.quantidade 
            }
