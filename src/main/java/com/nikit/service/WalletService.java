package com.nikit.service;

import com.nikit.modal.Order;
import com.nikit.modal.User;
import com.nikit.modal.Wallet;

public interface WalletService {

    Wallet getUserWallet (User user);

    Wallet addBalance(Wallet wallet, Long money);

    Wallet findWalletById(Long id) throws Exception;

    Wallet walletToWalletTransfer(User sender, Wallet recieverWallet, Long amount) throws Exception;

    Wallet payOrderPayment(Order order, User user) throws Exception;




}